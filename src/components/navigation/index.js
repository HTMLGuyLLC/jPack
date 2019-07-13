import axios from 'axios';
import {dom} from "../../utilities/dom";

window.addEventListener('load', function() {
    document.body.prepend(`<div class="progress page-navigation-loader">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>`);
});

/**
 *
 */
export const navigation = {
};