<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="submitForm">
      <v-container cols="12" class="d-flex align-center justify-center">
        <v-responsive max-width="400">
          <v-text-field
            label="Nome"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
            v-model="form.name"
          ></v-text-field>
        </v-responsive>
      </v-container>

      <v-container cols="12" class="d-flex align-center justify-center">
        <v-responsive max-width="400">
          <v-text-field
            label="Email"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
            v-model="form.email"
          ></v-text-field>
        </v-responsive>
      </v-container>

      <v-container cols="12" class="d-flex align-center justify-center">
        <v-responsive max-width="400">
          <v-text-field
            label="RA"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
            v-model="form.ra"
          ></v-text-field>
        </v-responsive>
      </v-container>

      <v-container cols="12" class="d-flex align-center justify-center">
        <v-responsive max-width="400">
          <v-text-field
            label="CPF"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
            v-model="form.cpf"
          ></v-text-field>
        </v-responsive>
      </v-container>

      <v-container class="d-flex align-center justify-center">
        <v-responsive max-width="160">
          <v-btn variant="tonal" type="submit" block>
            Registrar
          </v-btn>
        </v-responsive>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>

</script>