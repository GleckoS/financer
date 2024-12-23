export type Module = Record<string, any>;

// Util for module loading
const loadModules = async (
  modules: Record<string, () => Promise<Module>>
): Promise<Module[]> => {
  const loadedModules = await Promise.all(
    Object.entries(modules).map(async ([, importFn]) => {
      const module = await importFn();
      return module.default || module;
    })
  );
  return loadedModules;
};

// Import modules from static paths

const singleTypesModules: Record<string, () => Promise<Module>> =
  // @ts-expect-error Vite in site badly configured and don't see glob type
  import.meta.glob("./single-types/*.ts");
const collectionTypesModules: Record<string, () => Promise<Module>> =
  // @ts-expect-error Vite in site badly configured and don't see glob type
  import.meta.glob("./collection-types/*.ts");
const componentsModules: Record<string, () => Promise<Module>> =
  // @ts-expect-error Vite in site badly configured and don't see glob type
  import.meta.glob("./components/*.ts");

// Load modules
const singleTypes: Module[] = await loadModules(singleTypesModules);
const collectionTypes: Module[] = await loadModules(collectionTypesModules);
const components: Module[] = await loadModules(componentsModules);

const schemaTypes = [...singleTypes, ...collectionTypes, ...components];

// Export modules
export { singleTypes, collectionTypes, components, schemaTypes };
