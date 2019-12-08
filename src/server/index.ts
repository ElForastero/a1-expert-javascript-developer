import mock, { delay } from 'xhr-mock';
import { getCars, getCar } from './controllers/cars';
import { getColors } from './controllers/colors';
import { getManufacturers } from './controllers/manufacturers';

mock.setup();
mock.get(/\/api\/cars\/[0-9]/, delay(getCar, 300));
mock.get(/\/api\/cars/, delay(getCars, 350));
mock.get(/\/api\/colors/, delay(getColors, 250));
mock.get(/\/api\/manufacturers/, delay(getManufacturers, 250));
