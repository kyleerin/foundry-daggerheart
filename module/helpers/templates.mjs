/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/daggerheart/templates/actor/parts/actor-features.hbs',
    'systems/daggerheart/templates/actor/parts/actor-items.hbs',
    'systems/daggerheart/templates/actor/parts/actor-spells.hbs',
    'systems/daggerheart/templates/actor/parts/actor-effects.hbs',
    'systems/daggerheart/templates/actor/parts/actor-field.hbs',
    // Item partials
    'systems/daggerheart/templates/item/parts/item-effects.hbs',
  ]);
};
