// src/api/shared/controllers/shared.ts

import { factories } from '@strapi/strapi';

// Optional helper to build a recursive deep populate
const buildDeepPopulate = (level: number): any => {
  if (level <= 0) return true;
  return {
    populate: {
      '*': buildDeepPopulate(level - 1),
    },
  };
};

export default factories.createCoreController(
  'api::shared.shared',
  ({ strapi }) => ({
    async find(ctx) {
      const pLevel = parseInt(ctx.query.pLevel as string) || 1;

      const entities = await strapi.entityService.findMany(
        'api::shared.shared',
        {
          ...buildDeepPopulate(pLevel),
          filters: ctx.query.filters,
          sort: ctx.query.sort,
          pagination: ctx.query.pagination,
        }
      );

      return this.transformResponse(entities);
    },
  })
);
