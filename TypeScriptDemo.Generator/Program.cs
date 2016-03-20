using System;
using System.IO;
using System.Linq;
using System.Reflection;
using TypeLite;

namespace TypeScriptDemo.Generator
{
    class Program
    {
        static void Main(string[] args)
        {
            var assemblyFile = args[0];
            var outputPath = args[1];
            bool verbose = false;
            if ((args.Length > 2) && args[2].Equals("-verbose", StringComparison.InvariantCultureIgnoreCase))
                verbose = true;

            try
            {
                string workingFile = LoadReferencedAssembly(assemblyFile, verbose);
                if (!string.IsNullOrWhiteSpace(workingFile) && File.Exists(workingFile))
                {
                    GenerateTypeScriptContracts(workingFile, outputPath, verbose);
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("TypeScriptDemo.Generator error");
                Console.Error.WriteLine("{0}: {1}", ex.GetType().Name, ex.Message);
                Console.WriteLine(ex.StackTrace);
                Console.WriteLine();
            }
            if (verbose)
            {
                Console.Error.WriteLine("Press any key to continue...");
                Console.ReadKey();
            }
        }

        private static string LoadReferencedAssembly(string assemblyFile, bool verbose)
        {
            if (!File.Exists(assemblyFile))
            {
                Console.Error.WriteLine("File not found: \"{0}\"", assemblyFile);
                return null;
            }
            else
            {
                if (verbose)
                    Console.Error.WriteLine("Ref Assy: \"{0}\"", assemblyFile);
                var sourceAssemblyDirectory = Path.GetDirectoryName(Path.GetFullPath(assemblyFile));
                if (verbose)
                    Console.Error.WriteLine("Source path: \"{0}\"", sourceAssemblyDirectory);
                var fullPath = Path.Combine(sourceAssemblyDirectory, Path.GetFileName(assemblyFile));
                //var tempPath = Path.Combine(Path.GetTempPath(), Path.GetFileName(assemblyFile));
                //if (verbose)
                //    Console.Error.WriteLine("Temp file path: \"{0}\"", tempPath);
                //File.Copy(assemblyFile, tempPath, true);
                return fullPath;
            }
        }

        private static void GenerateTypeScriptContracts(string assemblyFile, string outputPath, bool verbose)
        {
            Console.Error.WriteLine();
            var assembly = Assembly.LoadFrom(assemblyFile);
            // If you want a subset of classes from this assembly, filter them here
            var rawTypes = assembly.GetTypes().ToList();
            if (rawTypes == null)
            {
                Console.Error.WriteLine("no models found in initial check!");
            }
            else
            {
                Console.Error.WriteLine("Got {0} raw types.", rawTypes.Count());
                var rawFiltered = rawTypes.Where(t => t.Namespace.EndsWith("Models.API"));
                var models = rawFiltered.ToList();
                if (models == null)
                {
                    Console.Error.WriteLine("no models found!");
                }
                else
                {
                    if (verbose)
                    {
                        Console.Error.WriteLine("Got {0} models.", models.Count());
                        foreach (var model in models)
                        {
                            Console.Error.WriteLine("Namespace = \"{0}\", Name = \"{1}\"", model.Namespace, model.Name);
                        }
                    }

                    var generator = new TypeScriptFluent()
                        .WithConvertor<Guid>(c => "string")
                        .WithMemberFormatter((identifier) =>
                            Char.ToLower(identifier.Name[0]) + identifier.Name.Substring(1));

                    foreach (var model in models)
                    {
                        generator.ModelBuilder.Add(model);
                    }

                    //Generate enums
                    //var tsEnumDefinitions = generator.Generate(TsGeneratorOutput.Enums);
                    //File.WriteAllText(Path.Combine(outputPath, "enums.ts"), tsEnumDefinitions);
                    //Generate interface definitions for all classes
                    var tsClassDefinitions = generator.Generate(TsGeneratorOutput.Properties | TsGeneratorOutput.Fields);
                    File.WriteAllText(Path.Combine(outputPath, "bgoodmusic.d.ts"), tsClassDefinitions);
                }
            }

        }
    }
}
