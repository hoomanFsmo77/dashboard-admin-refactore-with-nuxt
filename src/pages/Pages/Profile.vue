<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Profile'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Profile</h1>
      </column>
    </row>
    <row>
      <column col="12" md="4">
        <div class="card overflow-hidden">
          <div class="card-image"></div>
          <div class="card-profile relative">
            <div class="absolute right-[30%] shadow-card rounded-full top-[-73px] w-[135px] h-[135px] p-[5px] bg-white">
              <nuxt-img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                   class="rounded-full w-full h-full   object-cover z-50  "
                   alt=""
              />
            </div>
          </div>
          <div class="card-body mt-4 p-1 text-center">
            <h3 class="text-center font-700 text-primary-dark">Nathan Andrews</h3>
            <p class="text-gray-800 text-[0.9rem] my-1 text-center">
              One morning, when Gregor Samsa woke from troubled
            </p>
            <button class="btn-dark btn btn-xsm mb-1">
              <i class="bi bi-twitter"></i>
              Follow
            </button>
          </div>
        </div>
        <div class="card my-2 p-2 flex items-center gap-1.5">
          <div>
            <UserProfile class="overflow-hidden" height="80px" width="80px" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
          </div>
          <div>
            <h5 class="text-left font-700 text-primary-dark">Nathan Andrews</h5>
            <span class="text-gray-500 text-[0.9rem]">Coder</span>
            <div class="flex gap-1 my-0.5">
              <Tooltip class="text-[0.9rem] text-blue-600 relative cursor-pointer" width="130px" type="icon" v-for="item in tooltipData2" :icon="item.icon" :title="item.title"/>
            </div>
          </div>

        </div>
        <Card title="My Profile" :has-menu="!false" body-class="!p-2">
          <div class="flex items-center gap-1.5">
            <div>
              <UserProfile class="overflow-hidden" height="80px" width="80px" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
            </div>
            <div>
              <FormInput id="name" placeholder="Your Name" class="w-full text-[0.9rem]" label="Name"/>
            </div>
          </div>
          <div class="my-1">
            <FormArea  id="bio" label="Bio" value="The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What's happened to me? he thought. It wasn't a dream."
                      row="8" class="text-[0.9rem] w-full"
            />
          </div>
          <div>
            <FormInput id="email" placeholder="you@domain.com" class="w-full text-[0.9rem]" label="Email"/>

          </div>
          <div class="my-1">
            <FormInput id="password" type="password"  placeholder="you@domain.com" value="12345678" class="w-full text-[0.9rem]" label="Password"/>
          </div>
          <div class="text-right mt-2">
            <button class="btn btn-sm btn-primary-full">Save</button>
          </div>
        </Card>
      </column>
      <column col="12" md="8">
        <div class="card ">
          <div class="card-title">
            <FormInputGroup  type="outline" placeholder="Message" icon="bi bi-send-fill"/>
          </div>
          <div class="card-body ">
            <div class="p-1">
              <row>
                <column col="12">
                  <div class="flex gap-1">
                    <div>
                      <UserProfile class="overflow-hidden" height="80px" width="80px" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
                    </div>
                    <div>
                      <span class="text-[0.9rem] text-gray-800 block">10 mins ago</span>
                      <span class="text-1.1 text-primary-dark font-800 block">Nathan Andrews</span>
                      <p class="text-[0.8rem] font-400 my-0.5 text-gray-600">
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                      </p>
                    </div>
                  </div>
                </column>
              </row>
              <row>
                <column col="10" class="ml-auto">
                  <div class="flex gap-1">
                    <div>
                      <UserProfile class="overflow-hidden" height="50px" width="50px" src="/profiles/profile_1.svg"  image-width="40"/>
                    </div>
                    <div>
                      <p class="text-[0.8rem] font-400 my-0.5 text-gray-600 !mt-0">
                        <span class="!text-primary-dark !font-800 ">Nathan Andrews</span>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                      </p>
                    </div>
                  </div>
                </column>
              </row>
              <row>
                <column col="10" class="ml-auto">
                  <div class="flex gap-1">
                    <div>
                      <UserProfile class="overflow-hidden" height="50px" width="50px" src="/profiles/profile_2.svg"  image-width="40"/>
                    </div>
                    <div>
                      <p class="text-[0.8rem] font-400 my-0.5 text-gray-600 !mt-0">
                        <span class="!text-primary-dark !font-800 ">Nathan Andrews</span>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.
                      </p>
                    </div>
                  </div>
                </column>
              </row>
            </div>
            <div class="divider !my-1"></div>
            <div class="p-1">
              <row>
                <column col="12">
                  <div class="flex gap-1">
                    <div>
                      <UserProfile class="overflow-hidden" height="80px" width="80px" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
                    </div>
                    <div>
                      <span class="text-[0.9rem] text-gray-800 block">10 mins ago</span>
                      <span class="text-1.1 text-primary-dark font-800 block">Nathan Andrews</span>
                      <p class="text-[0.8rem] font-400 my-0.5 text-gray-600">
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                      </p>
                    </div>
                  </div>
                </column>
              </row>
            </div>
            <div class="divider !my-2"></div>
            <div class="p-1">
              <row>
                <column col="12">
                  <div class="flex gap-1">
                    <div>
                      <UserProfile class="overflow-hidden" height="80px" width="80px" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
                    </div>
                    <div>
                      <span class="text-[0.9rem] text-gray-800 block">10 mins ago</span>
                      <span class="text-1.1 text-primary-dark font-800 block">Nathan Andrews</span>
                      <p class="text-[0.8rem] font-400 my-0.5 text-gray-600">
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                      </p>
                    </div>
                  </div>
                </column>
              </row>
              <row>
                <column col="10" class="ml-auto">
                  <div class="flex gap-1">
                    <div>
                      <UserProfile class="overflow-hidden" height="50px" width="50px" src="/profiles/profile_1.svg"  image-width="40"/>
                    </div>
                    <div>
                      <p class="text-[0.8rem] font-400 my-0.5 text-gray-600 !mt-0">
                        <span class="!text-primary-dark !font-800 ">Nathan Andrews</span>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                      </p>
                    </div>
                  </div>
                </column>
              </row>

            </div>

          </div>
        </div>
        <Card class="!my-2" title="Edit Profile" body-class="!p-0" :has-menu="!false">
          <div class="p-1">
            <row class="!mt-0 !pt-0">
              <column col="12" md="5">
                <FormInput id="company" class="text-[0.9rem] w-full" label="Company" placeholder="Company" value="Nathan & Nathan"/>
              </column>
              <column col="12" md="3">
                <FormInput id="Username" class="text-[0.9rem] w-full" label="Username" placeholder="Username" value="Nathan"/>
              </column>
              <column col="12" md="4">
                <FormInput id="Email" class="text-[0.9rem] w-full" label="Email address" placeholder="Email " />
              </column>
            </row>
            <row class="!mt-0 !pt-0">
              <column md="6" col="12">
                <FormInput id="firstname" class="text-[0.9rem] w-full" label="First Name" placeholder="First Name " />
              </column>
              <column md="6" col="12">
                <FormInput id="Lastname" class="text-[0.9rem] w-full" label="Last Name" placeholder="Last Name " />
              </column>
            </row>
            <row class="!mt-0 !pt-0">
              <column col="12">
                <FormInput id="Address" class="text-[0.9rem] w-full" label="Address" placeholder="Home Address " />
              </column>
            </row>
            <row class="!mt-0 !pt-0">
              <column col="12" md="4">
                <FormInput id="City" class="text-[0.9rem] w-full" label="City" placeholder="City " />
              </column>
              <column col="12" md="3">
                <FormInput type="number" id="Zip" class="text-[0.9rem] w-full" label="Zip" placeholder="Zip " />

              </column>
              <column col="12" md="5">
                <FormSelect class="w-full" id="country" label="Country" :opt="['US','UK']" value="US"/>

              </column>
            </row>
            <row>
              <column col="12">
                <FormArea id="about" label="About me" class="text-[0.9rem] w-full" placeholder="Here can be your description" value="The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 'What's happened to me?' he thought. It wasn't a dream." row="6"/>
              </column>
            </row>
          </div>
          <div class="card-footer !py-1 text-right">
            <button class="btn btn-primary-full">Update Profile</button>
          </div>
        </Card>

      </column>
    </row>
  </div>

</template>

<script setup lang="ts">
import {tooltipData2} from "~/utils/extraData";

</script>

