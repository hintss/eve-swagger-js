jest.mock('../../../internal/ESIAgent');

const Api = require('../../../Api');

let api = new Api();
let agent = api._esiAgent;

afterEach(() => {
  agent.__reset();
});

test('CharacterCorporation.info', () => {
  agent.__expectRoute('get_characters_character_id', {'character_id': 1});
  agent.__expectRoute('get_corporations_corporation_id', {'corporation_id': 109299958});
  return api.characters(1, 'my_token').corporation.info().then(result => {
    expect(result).toBeDefined();
  });
});

test('CharacterCorporation.history', () => {
  agent.__expectRoute('get_characters_character_id', {'character_id': 1});
  agent.__expectRoute('get_corporations_corporation_id_alliancehistory', {'corporation_id': 109299958});
  return api.characters(1, 'my_token').corporation.history().then(result => {
    expect(result).toBeDefined();
  });
});

test('CharacterCorporation.icon', () => {
  agent.__expectRoute('get_characters_character_id', {'character_id': 1});
  agent.__expectRoute('get_corporations_corporation_id_icons', {'corporation_id': 109299958});
  return api.characters(1, 'my_token').corporation.icon().then(result => {
    expect(result).toBeDefined();
  });
});

test('CharacterCorporation.members', () => {
  agent.__expectRoute('get_characters_character_id', {'character_id': 1});
  agent.__expectRoute('get_corporations_corporation_id_members', {'corporation_id': 109299958}, {token: 'my_token'});
  return api.characters(1, 'my_token').corporation.members().then(result => {
    expect(result).toBeDefined();
  });
});

test('CharacterCorporation.roles', () => {
  agent.__expectRoute('get_characters_character_id', {'character_id': 1});
  agent.__expectRoute('get_corporations_corporation_id_roles', {'corporation_id': 109299958}, {token: 'my_token'});
  return api.characters(1, 'my_token').corporation.roles().then(result => {
    expect(result).toBeDefined();
  });
});

test('CharacterCorporation.id', () => {
  agent.__expectRoute('get_characters_character_id', {'character_id': 1});
  let char = api.characters(1, 'my_token');
  return char.corporation.id().then(result => {
    expect(result).toEqual(109299958);
    // Call id() a second time and confirm that the result is memo-ized,
    // i.e. it returns the same value but no more route invocation
    return char.corporation.id();
  }).then(result => {
    expect(result).toEqual(109299958);
  });
});