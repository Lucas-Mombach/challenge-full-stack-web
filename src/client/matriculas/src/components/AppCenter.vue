<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">  
        <v-avatar
          class="me-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-spacer></v-spacer>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  color="grey-lighten-4"
                  title="Módulo Acadêmico"
                  
                ></v-list-item>
                
                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  title="Alunos"
                  link
                ></v-list-item>

                <v-list-item
                  v-for="n in 8"
                  :title="`   `"
                  link
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="85vh" rounded="lg">
              
              <!-- Content-->
              
        
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  
</script>

<script>


</script>
