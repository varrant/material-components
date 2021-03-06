import Component from 'vue-class-component';

import mdDropdown from '../../../components/dropdown';
import mdDropdownItem from '../../../components/dropdown-item';
import mdBadge from '../../../components/badge';

@Component({
    components: {
        mdDropdown,
        mdDropdownItem,
        mdBadge
    },
    template: require('./dropdowns.html')
})
export default class Dropdowns {
    private $broadcast: any;

    closeDropdown() {
        this.$broadcast('dropdown-list::close');
    }
}