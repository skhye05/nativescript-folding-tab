import Vue from "nativescript-vue";

import FoldingTab from "nativescript-folding-tab/vue";

import Home from "./components/Home";

Vue.use(FoldingTab);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
