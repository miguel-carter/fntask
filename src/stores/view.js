import { writable } from "svelte/store";

export const viewState = writable([
  { name: "profile", icon: "fa-user", active: true },
  { name: "projects", icon: "fa-diagram-project", active: false },
  { name: "board", icon: "fa-rectangle-list", active: false },
  { name: "settings", icon: "fa-gear", active: false },
]);
