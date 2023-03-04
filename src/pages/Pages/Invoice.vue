<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Invoice'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Invoice</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <h4 class="text-primary-dark font-800 text-left"> Invoice #20190204 </h4>
      </column>
      <column col="12" md="6" class="md:text-right text-left">
        <button class="btn-gray btn ">Download</button>
        <button class="btn btn-primary-full ml-1">Pay</button>
      </column>
    </row>
    <row>
      <column col="12">
        <div class="card p-3">
          <div class="text-right mt-1">
            <span class="category-card  bg-primary-red  text-white text-[0.7rem]">Overdue</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-1">
            <nuxt-img  provider="cloudinary"   src="v1677917716/dashboard/d_logo_liscqp.png" width="100" alt=""/>
            <h2 class="text-primary-dark font-700 text-center">Invoice from Vintage, Ltd.</h2>
            <span class="text-[0.9rem] text-gray-600 font-500">Invoice #20190204</span>
          </div>
          <row>
            <column col="12" md="6">
              <ul class="flex flex-col ">
                <li class="text-gray-600 uppercase tracking-widest font-700 text-1 mb-0.5">Invoiced from</li>
                <li class="text-[0.9rem] text-primary-dark font-800">Franz Kafka</li>
                <li class="text-[0.9rem] text-gray-600 ">
                  Bank Clerk
                  <br>
                  Nerudova 23
                  <br>
                  111 50 Praha
                </li>
                <li class="text-gray-600 uppercase tracking-widest font-700 text-1 mt-1.5 mb-0.5">Invoiced ID</li>
                <li class="text-[0.9rem]">#20190204</li>
              </ul>
            </column>
            <column col="12" md="6">
              <ul class="flex flex-col ">
                <li class="text-gray-600 uppercase tracking-widest font-700 text-1 mb-0.5">Invoiced to</li>
                <li class="text-[0.9rem] text-primary-dark font-800">Jack London</li>
                <li class="text-[0.9rem] text-gray-600 ">
                  Lonely Wolf
                  <br>
                  1150 Lost St.
                </li>
                <li class="text-gray-600 uppercase tracking-widest font-700 text-1 mt-1.5 mb-0.5">Due date</li>
                <li class="text-[0.9rem]">Feb 23, 2021</li>
              </ul>
            </column>
          </row>
          <row>
            <column col="12">
              <div class="table-responsive overflow-hidden">
                <table class="w-full ">
                  <thead>
                  <tr class="!border-b-2 !border-b-primary-dark">
                    <th  class="pr-1 py-1 ">Description</th>
                    <th >Hours</th>
                    <th class="!text-right">Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="pr-1 py-1">Novel proofreading</td>
                    <td>50</td>
                    <td class="!text-right">$9250</td>
                  </tr>
                  <tr>
                    <td class="pr-1 py-1">Consulting</td>
                    <td>3</td>
                    <td class="!text-right">$555</td>
                  </tr>
                  <tr>
                    <td class="!font-700 pr-1 py-1">Total amount due</td>
                    <td></td>
                    <td class="!font-700 !text-right !text-2">$9805</td>
                  </tr>
                  </tbody>
                </table>

              </div>
            </column>
          </row>
          <div class="divider !my-3"></div>
          <row>
            <column col="12">
              <h6 class="uppercase tracking-widest text-primary-dark font-700">Note</h6>
              <p class="text-[0.8rem] font-500 text-gray-500 mt-0.5">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
              </p>
            </column>
          </row>


        </div>
      </column>
    </row>
  </div>

</template>

<script setup>






</script>
<style scoped lang="scss">
@tailwind components;
table{
  @apply [&_th]:text-left [&_td]:text-left [&_th]:text-[0.9rem] [&_th]:text-primary-dark [&_td]:text-[0.9rem] [&_td]:font-500 [&_td]:text-primary-dark;
}


</style>
