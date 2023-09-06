<script setup lang="ts">
import ComponentTitle from '../components/ComponentTitle.vue'
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="menu">Menu</ComponentTitle>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="Basic Menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">Submenus</h5>
      <q-btn color="primary" label="Click me">
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Open...</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Preferences</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu anchor="top end" self="top start">
                <q-list>
                  <q-item v-for="n in 3" :key="n" dense clickable>
                    <q-item-section>Submenu Label</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                    <q-menu auto-close anchor="top end" self="top start">
                      <q-list>
                        <q-item v-for="n in 3" :key="n" dense clickable>
                          <q-item-section>3rd level Label</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Quit</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">Positioning</h5>
      <q-btn color="primary" label="Anchor/Self Menu">
        <q-menu anchor="top right" self="top left">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>anchor="top right"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>self="top left"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Anchor/Self Menu">
        <q-menu anchor="center middle" self="center middle">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>anchor="center middle"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>self="center middle"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Anchor/Self Menu">
        <q-menu anchor="bottom right" self="bottom left">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>anchor="bottom right"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>self="bottom left"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Offset Menu">
        <q-menu :offset="[0, 20]">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[0, 20]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[0, 20]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Offset Menu">
        <q-menu :offset="[50, 10]">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[50, 10]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[50, 10]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Offset Menu">
        <q-menu :offset="[-50, 10]">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[-50, 10]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[-50, 10]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
