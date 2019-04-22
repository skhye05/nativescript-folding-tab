<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <GridLayout class="p-20">
      <FoldingTab :items="items" verticalAlignment="bottom" @tabSelected="onTabSelected"/>
    </GridLayout>
  </Page>
</template>

<script>
import { FoldingTab, FoldingTabItem } from 'nativescript-folding-tab';

export default {
  data() {
    return {
      items: [
        new FoldingTabItem("Nearby", "ic_nearby_icon"),
        new FoldingTabItem("Chat", "ic_new_chat_icon"),
        new FoldingTabItem("Profile", "ic_profile_icon"),
        new FoldingTabItem("Settings", "ic_settings_icon")
      ]
    };
  },
  methods: {
    onTabSelected(args) {
      console.log(
        "tab selected " + this.items.title + " at index " + args.index
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
