<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Pricing tables'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Pricing tables</h1>
      </column>
    </row>
    <row>
      <column col="12" md="4">
        <div class="card p-2">
          <div class="text-center">
            <span class="tracking-widest text-[0.9rem] text-primary-indigo font-700 uppercase ">free</span>
            <br>
            <span class="text-2.5 text-primary-dark font-700 mx-0.25">$0</span>
            <span class="text-gray-600 text-[0.9rem]">/ month</span>
          </div>
          <div class="divider !my-1.5"></div>
          <div class="flex flex-col ">
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Single User</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">5GB Storage</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Unlimited Public Projects</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-x text-1.6 text-gray-500 "></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Community Access</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-x text-1.6 text-gray-500 "></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Unlimited Private Projects</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-x text-1.6 text-gray-500 "></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Dedicated Phone Support</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-x text-1.6 text-gray-500 "></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Monthly Status Reports</span>
            </p>
            <div class="text-center mt-1">
              <button class="btn btn-primary btn-sm">Select</button>
            </div>
          </div>

        </div>
      </column>
      <column col="12" md="4">
        <div class="card p-2 relative overflow-hidden ">
          <div class="card-status"></div>
          <div class="text-center">
            <span class="tracking-widest text-[0.9rem] text-primary-indigo font-700 uppercase ">Plus</span>
            <br>
            <span class="text-2.5 text-primary-dark font-700 mx-0.25">$9</span>
            <span class="text-gray-600 text-[0.9rem]">/ month</span>
          </div>
          <div class="divider !my-1.5"></div>
          <div class="flex flex-col ">
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Single User</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">5GB Storage</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Unlimited Public Projects</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Community Access</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Unlimited Private Projects</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-x text-1.6 text-gray-500 "></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Dedicated Phone Support</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-x text-1.6 text-gray-500 "></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Monthly Status Reports</span>
            </p>
            <div class="text-center mt-1">
              <button class="btn btn-primary btn-sm">Select</button>
            </div>
          </div>

        </div>

      </column>
      <column col="12" md="4">
        <div class="card p-2">
          <div class="text-center">
            <span class="tracking-widest text-[0.9rem] text-primary-indigo font-700 uppercase ">Pro</span>
            <br>
            <span class="text-2.5 text-primary-dark font-700 mx-0.25">$30</span>
            <span class="text-gray-600 text-[0.9rem]">/ month</span>
          </div>
          <div class="divider !my-1.5"></div>
          <div class="flex flex-col ">
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Single User</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">5GB Storage</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>
              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Unlimited Public Projects</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>

              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Community Access</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>

              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Unlimited Private Projects</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>

              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Dedicated Phone Support</span>
            </p>
            <p class="flex items-center">
              <i class="bi bi-check text-primary-indigo text-1.6"></i>

              <span class="text-gray-800 font-500 ml-0.25 text-[0.9rem]">Monthly Status Reports</span>
            </p>
            <div class="text-center mt-1">
              <button class="btn btn-primary btn-sm">Select</button>
            </div>
          </div>

        </div>

      </column>
    </row>
  </div>
</template>

<script setup>



</script>

