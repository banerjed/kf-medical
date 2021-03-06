export default (app) => {
  app.post(
    `/tenant/:tenantId/medicine-enum`,
    require('./medicineEnumCreate').default,
  );
  app.put(
    `/tenant/:tenantId/medicine-enum/:id`,
    require('./medicineEnumUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/medicine-enum/import`,
    require('./medicineEnumImport').default,
  );
  app.delete(
    `/tenant/:tenantId/medicine-enum`,
    require('./medicineEnumDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/medicine-enum/autocomplete`,
    require('./medicineEnumAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/medicine-enum`,
    require('./medicineEnumList').default,
  );
  app.get(
    `/tenant/:tenantId/medicine-enum/:id`,
    require('./medicineEnumFind').default,
  );
};
