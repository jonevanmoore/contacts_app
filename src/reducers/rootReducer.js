import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import settingsReducer from "./settingsReducer"
import contactsReducer from "./contacts";

export const rootReducer = combineReducers({
    home: homeReducer,
    settings: settingsReducer,
    contacts: contactsReducer
});
