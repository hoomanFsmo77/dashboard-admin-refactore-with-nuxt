<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Forms validation'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Forms validation</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Forms validation" :has-menu="false" body-class="!p-2">
          <p class="article">
            Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.
          </p>
          <form @submit.prevent="checkValidation">
            <row>
              <column col="12" md="4">
                <FormInput  id="fs"
                          label="first name"
                          :success="success('firstname')"
                          :error="error('firstname')"
                          success-message="Looks good!"
                          error-message="Please enter your first name."
                          v-model="form.firstname.value"
                          class="w-full"
                          :value="form.firstname.value" />
              </column>
              <column col="12" md="4">
                <FormInput
                    id="ls"
                    label="last name"
                    :success="success('lastname')"
                    :error="error('lastname')"
                    success-message="Looks good!"
                    error-message="Please enter your last name."
                    v-model="form.lastname.value"
                    class="w-full"
                    :value="form.lastname.value"
                />
              </column>
              <column col="12" md="4">
                <FormInput
                    id="ls"
                    v-model="form.username.value"
                    :success="success('username')"
                    :error="error('username')"
                    error-message="Please enter your username."
                    success-message="  "
                    label="Username"
                    icon="bi bi-person-circle"
                    class="w-full"
                    placeholder="Username"
                    :value="form.username.value"
                />
              </column>
            </row>
            <row>
              <column col="12" md="6">
                <FormInput
                    id="city"
                    label="city"
                    :success="success('city')"
                    :error="error('city')"
                    error-message="Please enter a valid city."
                    success-message="Looks good!"
                    v-model="form.city.value"
                    class="w-full"
                    :value="form.city.value" />
              </column>
              <column class="relative" col="12" md="3">
                <FormSelect
                    id="country"
                    v-model="form.country.value"
                    label="Country"
                    value="Choose..."
                    class="w-full !text-[0.9rem]"
                    :opt="['Choose...','USA','UK']"
                    @input="form.country.valid=form.country.value==='Choose...'"
                    :error="form.country.value==='Choose...'"
                    :success="form.country.value!=='Choose...'"
                    error-message="Please enter a country."
                    success-message="Looks good!"
                />
              </column>
              <column col="12" md="3">
                <FormInput
                    id="zip"
                    label="zip"
                    v-model="form.zip.value"
                    class="w-full"
                    :value="form.zip.value"
                    :success="success('zip')"
                    :error="error('zip')"
                    error-message="Please enter a valid zip."
                    success-message="Looks good!"
                />

              </column>
            </row>
            <row>
              <column col="12">
                <div class="flex gap-0.5 items-center">
                  <input :class="{'!border-[1px] !border-red-500':!form.term.valid}" :value="form.term.valid" v-model="form.term.valid" id="term" type="checkbox" class="checkbox">
                  <label for="term" :class="{'text-red-500':!form.term.valid}" class="text-[0.9rem] text-gray-700 font-500">Agree to terms and conditions</label>
                </div>
                <button type="submit" class="btn btn-primary-full btn-sm mt-1">submit form</button>
              </column>
            </row>
          </form>
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
const {form,checkValidation,success,error}=useValidation()
</script>
