<template>
  <Page class="page">
    <ActionBar class="action-bar" flat="true">
      <Label class="action-bar-title" :text="title"></Label>
    </ActionBar>

    <GridLayout class="p-20">
      <StackLayout class="p-t-20" verticalAlignment="top">
        <Image class="p-10" :src="icon" width="100" height="100"></Image>
        <Label class="text-center h2" :text="title + ' tab has been selected!'" textWrap="true"></Label>
      </StackLayout>

      <FoldingTab
        :items="items"
        backgroundColor="#684756"
        indicator="#EED7C5"
        verticalAlignment="bottom"
        @tabSelected="onTabSelected"
      />
    </GridLayout>
  </Page>
</template>

<script>
import { FoldingTab, FoldingTabItem } from "nativescript-folding-tab";

export default {
  data() {
    return {
      items: [
        new FoldingTabItem("Nearby", "ic_nearby_icon"),
        new FoldingTabItem("Chat", "ic_new_chat_icon"),
        new FoldingTabItem("Profile", "ic_profile_icon"),
        new FoldingTabItem("Settings", "ic_settings_icon")
      ],
      title: "Nearby",
      icon: "res://ic_nearby_icon"
    };
  },
  methods: {
    onTabSelected(args) {
      this.title = this.items[args.newIndex].title;
      this.icon = `res://${this.items[args.newIndex].icon}`;
      console.log(
        "tab selected " +
          this.items[args.newIndex].title +
          " at index " +
          args.newIndex
      );
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
