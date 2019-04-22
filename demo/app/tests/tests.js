var FoldingTab = require("nativescript-folding-tab").FoldingTab;
var foldingTab = new FoldingTab();

describe("greet function", function() {
    it("exists", function() {
        expect(foldingTab.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(foldingTab.greet()).toEqual("Hello, NS");
    });
});