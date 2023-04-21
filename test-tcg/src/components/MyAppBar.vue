<template>
  <v-app-bar style="background-color: #f5f5f5">
    <v-container fluid>
      <v-row align="center">
        <v-col cols="5"  class="align-center">
          <v-toolbar-title>Hola {{ user }}!</v-toolbar-title>
        </v-col>

        <v-col cols="5">
            <v-card
            class="mx-auto"
            color="grey-lighten-3"
            max-width="400"
          >
            <v-card-text style="background-color: #f5f5f5">
              <v-text-field
                :loading="loading"
                density="compact"
                variant="solo"
                label="Search templates"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                @click:append-inner="onClick"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="2">
            <v-row>
                <v-col cols="3">
          <v-avatar size="50">
            <v-img
            class="bg-white"
            width="40"
            src="C:/test-tcg/public/my_avatar.png"
            cover
          ></v-img>
        </v-avatar>
    </v-col>
    <v-col cols="9">
        <h3>Lily Cabrera</h3>
        <h5>Admin</h5>
    </v-col>

    </v-row>

        
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyAppBar",

  data: () => ({}),

  computed: {
    ...mapState(["user"]),
  },
};
</script>