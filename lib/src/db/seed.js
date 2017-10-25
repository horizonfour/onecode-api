"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
const RegionService_1 = require("../services/RegionService");
const MusicStyleService_1 = require("../services/MusicStyleService");
const ReligionService_1 = require("../services/ReligionService");
function region() {
    const regionService = new RegionService_1.RegionService();
    const regions = [
        { name: 'ZL/Aricanduva' },
        { name: 'ZL/ARTUR ALVIM' },
        { name: 'ZL/GUAIANAZES' },
    ];
    return regions.map((item) => regionService.update(item, item, true));
}
function musicStyle() {
    const musicStyleService = new MusicStyleService_1.MusicStyleService();
    const musicStyles = [
        { name: 'Rock' },
        { name: 'Axé' },
        { name: 'Bossa Nova' },
    ];
    return musicStyles.map((item) => musicStyleService.update(item, item, true));
}
function religion() {
    const religionService = new ReligionService_1.ReligionService();
    const religions = [
        { name: 'Metodista' },
        { name: 'Assembleia de Deus' },
        { name: 'Bola de Neve' },
    ];
    return religions.map((item) => religionService.update(item, item, true));
}
function user() {
    const userService = new UserService_1.UserService();
    const users = [{ name: 'Test', password: '123654' }];
    return users.map((item) => userService.update(item, item, true));
}
async function runSeed() {
    await Promise.all([user(), religion(), musicStyle(), region()].reduce((prev, next) => prev.concat(next), []));
    console.log('Registros inseridos com sucesso!');
    return;
}
runSeed();
global.process.exit(0);
//# sourceMappingURL=seed.js.map