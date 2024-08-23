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
import axios from "axios";

export default {
  data() {
    return {
      valid: true,
      form: {
        name: "",
        email: "",
        ra: "",
        cpf: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log(this.form); // Check the content before sending
        const response = await axios.post("http://localhost:4600/api/v1/", this.form);
        console.log("Form submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
      }
    },

  },
};
</script>