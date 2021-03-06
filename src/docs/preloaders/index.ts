import Component from 'vue-class-component';
import docLinearDeterminate from './linear-determinate';
import docLinearIndeterminate from './linear-indeterminate';
import docCircular from './circular';
import docFlashing from './flashing';

@Component({
    components: {
        docLinearDeterminate,
        docLinearIndeterminate,
        docCircular,
        docFlashing
    },
    template: require('./preloaders.html')
})
export default class Preloaders {
    data() {
        return {
            api: [
                {
                    name: "Linear preloader",
                    api: require('../../components/linear-preloader/linear-preloader-api.json')
                },
                {
                    name: "Circular preloader",
                    api: require('../../components/circular-preloader/circular-preloader-api.json')
                }
            ],
            snippets: {
                linearDeterminate: require('./linear-determinate/linear-determinate.snippet.html'),
                linearIndeterminate: require('./linear-indeterminate/linear-indeterminate.snippet.html'),
                circular: require('./circular/circular.snippet.html'),
                flashing: require('./flashing/flashing.snippet.html')
            },
            src: [
                {
                    name: "Linear preloader",
                    script: require("!!html!highlightjs?lang=ts!../../components/linear-preloader/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/linear-preloader/linear-preloader.html')
                },
                {
                    name: "Circular preloader",
                    script: require("!!html!highlightjs?lang=ts!../../components/circular-preloader/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/circular-preloader/circular-preloader.html')
                }
            ]
        }
    }
}