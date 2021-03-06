import Component from 'vue-class-component';

import mdIcon from '../icon';

import waveEffect from '../../directives/wave-effect';

import Utils from  '../../components/utils';

@Component({
    props: {
        currentPage: {
            type: Number,
            'default': 0,
        },
        pageSize: {
            type: Number,
            required: true,
            twoWay: false
        },
        totalRecords: {
            type: Number,
            required: true,
            twoWay: false
        },
        displayPages: {
            type: Number,
            required: false,
            'default': 5,
            twoWay: false
        },
        itemClass: {
            required: false,
            'default': null,
            twoWay: false
        },
        firstLast: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        }
    },
    components: {
        mdIcon
    },
    directives: {
        waveEffect  
    },
    watch: {
        currentPage:  function() {
            this.$dispatch('pagination::selected', this.pagesWindow);
        },
        pages: {
            handler: function() {
                if (this.currentPage >= this.pages) {
                    this.currentPage = this.pages - 1;
                }
            }
        }
    },
    template: require('./pagination.html')
})
export default class Pagination {
    private active: boolean;
    private currentPage: number;
    private pageSize: number;
    private totalRecords: number;
    private itemClass: any;

    get pages() {
        return Math.max(Math.ceil(this.totalRecords / this.pageSize), 1);
    }

    get pager() {
        return Utils.generatePagination(this);
    }

    getSelected() {
        return {
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            from: this.currentPage * this.pageSize,
            to: (this.currentPage + 1) * this.pageSize,
            size: this.pageSize
        }
    }

    getClasses(n: number) {
        var classes = {};
        if (this.itemClass instanceof Array) {
            this.itemClass.forEach((value, index, array) => {
                classes[value] = true;
            });
        }
        else if (this.itemClass instanceof Object) {
            for (var key in this.itemClass) {
                classes[key] = this.itemClass[key];
            }
        }
        else {
            classes[this.itemClass] = true;
        }

        classes['active'] = n == this.currentPage;

        return classes;
    }

    setCurrentPage (n) {
        this.currentPage = n;
    }

    previousPage () {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    nextPage() {
        if (this.currentPage < this.pages - 1) {
            this.currentPage++;
        }
    }
}