<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Docs',link:'docs-Introduction'},{name:'CSS Components'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Theme CSS Components</h1>
      </column>
    </row>
    <row>
      <column col="12" md="10">
        <Card title="CSS Components" body-class="!p-2" :has-menu="!false">
          <div>
            <h5 class="content-highlight">Avatar</h5>
            <p class="article">
              Component to display your user image.
            </p>
            <h6 class="content-highlight">Supported props for Avatar component:</h6>
            <ul class="flex flex-col gap-0.25 list-disc md:pl-2 pl-0.25 !text-[0.8rem]">
              <li >
                <span class="content-highlight !font-800 !text-gray-700 mr-0.5">width</span>
                <span class="article !pb-0">- width for background circle</span>
              </li>
              <li >
                <span class="content-highlight !font-800 !text-gray-700 mr-0.5">height</span>
                <span class="article !pb-0">- height for background circle</span>
              </li>
              <li >
                <span class="content-highlight !font-800 !text-gray-700 mr-0.5">src</span>
                <span class="article !pb-0">- source of image</span>
              </li>
              <li >
                <span class="content-highlight !font-800 !text-gray-700 mr-0.5">image-width</span>
                <span class="article !pb-0">- width for image</span>
              </li>
            </ul>
            <div class="flex gap-2 flex-wrap my-1 items-center">
              <UserProfile
                  width="150px"
                  height="150px"
                  src="/profiles/profile_1.svg"
                  image-width="130"
              />
              <UserProfile
                  width="110px"
                  height="110px"
                  src="/profiles/profile_2.svg"
                  image-width="90"
              />
              <UserProfile
                  width="90px"
                  height="90px"
                  src="/profiles/profile_3.svg"
                  image-width="70"
              />
              <UserProfile
                  width="60px"
                  height="60px"
                  src="/profiles/profile_4.svg"
                  image-width="50"
              />
              <UserProfile
                  width="30px"
                  height="30px"
                  src="/profiles/profile_5.svg"
                  image-width="20"
              />
            </div>
            <div>
              <CodeEditor class="v-collapse mt-2"  width="0" min_width="100%" :read_only="true" :value="avatarCode"></CodeEditor>
            </div>

          </div>
          <div class="divider my-2"></div>
          <div>
            <h5 class="content-highlight">Badges</h5>
            <p class="content">Small count and labeling component.</p>
            <h6 class="tracking-widest uppercase text-primary-dark">Classic Badges</h6>
            <div class="flex gap-0.5 items-center mt-0.5 mb-1">
              <span class="badge-init bg-blue-600">blue</span>
              <span class="badge-init bg-gray-600">gray</span>
              <span class="badge-init bg-green-600">green</span>
              <span class="badge-init bg-yellow-600">yellow</span>
              <span class="badge-init bg-sky-600">sky</span>
              <span class="badge-init bg-red-600">red</span>
            </div>
            <h6 class="tracking-widest uppercase text-primary-dark ">pill Badges</h6>
            <div class="flex gap-0.5 !rounded-full items-center mt-0.5 mb-1">
              <span class="badge-init !rounded-full bg-blue-600">blue</span>
              <span class="badge-init !rounded-full bg-gray-600">gray</span>
              <span class="badge-init !rounded-full bg-green-600">green</span>
              <span class="badge-init !rounded-full bg-yellow-600">yellow</span>
              <span class="badge-init !rounded-full bg-sky-600">sky</span>
              <span class="badge-init !rounded-full bg-red-600">red</span>
            </div>
            <h6 class="tracking-widest uppercase text-primary-dark ">Light Badges</h6>
            <div class="flex gap-0.5 !rounded-full items-center mt-0.5 mb-1">
              <span class="category-card bg-blue-200 text-blue-600 !text-[0.8rem]">blue</span>
              <span class="category-card bg-gray-200 text-gray-600 !text-[0.8rem]">gray</span>
              <span class="category-card bg-green-200 text-green-600 !text-[0.8rem]">green</span>
              <span class="category-card bg-yellow-200 text-yellow-600 !text-[0.8rem]">yellow</span>
              <span class="category-card bg-sky-200 text-sky-600 !text-[0.8rem]">sky</span>
              <span class="category-card bg-red-200 text-red-600 !text-[0.8rem]">red</span>
            </div>
            <h6 class="tracking-widest uppercase text-primary-dark ">Notification Badges</h6>
            <div class="flex gap-2 !rounded-full items-center mt-0.5 mb-1">
              <NavbarButton icon="bi bi-bar-chart-line "
                            badge="!w-0.5 !h-0.5 !bg-primary-green !top-[0]"
              />
              <NavbarButton icon="bi bi-bell-fill "
                            badge="!w-0.5 !h-0.5 !bg-red-500 !top-[0]"
              />
              <NavbarButton  icon="bi bi-phone-fill" >12</NavbarButton>
              <NavbarButton  icon="bi bi-credit-card-fill" >8</NavbarButton>

            </div>
          </div>
          <div class="divider my-2"></div>
          <div>
            <h5 class="content-highlight">Pill component</h5>
            <row>
              <column col="12" md="4">
                <div class="card !rounded-full p-1.5 flex justify-between gap-0.5 items-center">
                  <div class="flex items-center gap-0.5">
                    <i class="bi bi-circle-fill text-sky-600 text-[0.75rem]"></i>
                    <div>
                      <span class="text-[0.8rem] font-700 text-primary-dark"> Data consumed</span>
                      <br>
                      <span class="text-gray-600 font-500 text-[0.85rem]">145,14 GB</span>
                    </div>
                  </div>

                  <div>
            <span class="icon-wrapper !bg-sky-600 !w-2 !h-2">
              <i class="bi bi-sd-card-fill !text-white !text-1"></i>
            </span>

                  </div>
                </div>
              </column>
              <column col="12" md="4">
                <div class="card !rounded-full p-1.5  flex justify-between gap-0.5 items-center">
                  <div class="flex items-center gap-0.5">
                    <i class="bi bi-circle-fill text-green-600 text-[0.75rem]"></i>
                    <div>
                      <span class="text-[0.8rem] font-700 text-primary-dark"> Open cases</span>
                      <br>
                      <span class="text-gray-600 font-500 text-[0.85rem]">30</span>
                    </div>
                  </div>

                  <div>
            <span class="icon-wrapper !bg-green-600 !w-2 !h-2">
                   <i class="bi bi-briefcase !text-white !text-1"></i>
            </span>

                  </div>
                </div>
              </column>
              <column col="12" md="4">
                <div class="card !rounded-full p-1.5  flex justify-between gap-0.5 items-center">
                  <div class="flex items-center gap-0.5">
                    <i class="bi bi-circle-fill text-indigo-600 text-[0.75rem]"></i>
                    <div>
                      <span class="text-[0.8rem] font-700 text-primary-dark"> Work orders</span>
                      <br>
                      <span class="text-gray-600 font-500 text-[0.85rem]">30</span>
                    </div>
                  </div>

                  <div>
            <span class="icon-wrapper !bg-indigo-600 !w-2 !h-2">
              <i class="bi bi-basket2-fill !text-white !text-1"></i>
            </span>

                  </div>
                </div>
              </column>
            </row>

          </div>
        </Card>
      </column>
    </row>
    <row>
      <column col="12" md="10">
        <Card title="CSS Utilities" :has-menu="!false" body-class="!p-2">
          <div>
            <h5 class="content-highlight">Background image</h5>
            <p class="article">
              Utility class that turns a <code>{{String("<img class='bg-image'>")}}</code> and <code>{{String(' <div class="card card-overlay"></div>')}}</code> into a background image for its parent. Useful e.g. for carousels. Make sure that image's parent container and the content that should be placed over the image are relatively positioned.
            </p>
            <row>
              <column col="12">
                <div class="card card-overlay">
                  <nuxt-img  src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"  class="bg-image h-[200px]"  alt="" />
                  <div class="card-body  flex justify-center items-center ">
                    <h2 class="card-header !text-white">I have a background image</h2>
                  </div>
                </div>
              </column>
            </row>
          </div>
          <div class="divider !my-2"></div>
          <div>
            <h5 class="content-highlight">Image overlay</h5>
            <p class="article">Utility class that darkens or lightens the backround image of the element to enhance the legibility. It can be used with cards, carousel slides, etc.</p>
            <p class="article">Gradient overlay adds vertical gradient that's darkest on the bottom third of the element.</p>
            <row>
              <column col="12" md="4">
                <div class="card card-overlay dark-overlay">
                  <nuxt-img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"  class="bg-image "  alt="" />
                  <div class="card-body  flex justify-center items-center ">
                    <h4 class="card-header text-center !text-white">Dark Overlay</h4>
                  </div>
                </div>
              </column>
              <column col="12" md="4">
                <div class="card card-overlay light-overlay">
                  <nuxt-img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"  class="bg-image "  alt="" />
                  <div class="card-body  flex justify-center items-center ">
                    <h4 class="card-header text-center">Light Overlay</h4>
                  </div>
                </div>
              </column>
              <column col="12" md="4">
                <div class="card card-overlay gradient-overlay">
                  <nuxt-img  src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"  class="bg-image "  alt="" />
                  <div class="card-body  flex justify-center items-center ">
                    <h4 class="card-header text-center !text-white">Gradient Overlay</h4>
                  </div>
                </div>
              </column>
            </row>
            <div class="p-1 bg-gray-200 rounded-6">
              <h5 class="content-highlight !text-gray-600">Class reference</h5>
              <p>
                <code>.dark-overlay, .light-overlay, .gradient-overlay </code>
                <span class="content">CSS class to be used on the element</span>
              </p>
            </div>
          </div>
          <div class="divider !my-2"></div>
          <div>
            <h5 class="content-highlight">Responsive borders</h5>
            <p class="content">
              Responsive borders as an addition to Tailwind's <a href="https://tailwindcss.com/docs/border-width" class="link">border utilities.</a>
            </p>
            <div class="p-1 bg-gray-200 rounded-6">
              <h5 class="content-highlight !text-gray-600">Class reference</h5>
              <p>
                <code>.md:border-1, .lg:border-red-500, .sm:border-solid </code>
              </p>
            </div>
          </div>
          <div class="divider !my-2"></div>
          <div>
            <h5 class="content-highlight">Block utilities</h5>
            <p class="content">
              Additional utility classes, for block elements mostly.
            </p>
            <div class="p-1 bg-gray-200 rounded-6">
              <h5 class="content-highlight !text-gray-600">Class reference</h5>
              <p class="content">
                <code>.bg-gray-100</code> to <code>.bg-gray-900</code>
                <span class="content">- grayscale backgrounds</span>
              </p>
              <p class="content">
                <code>.opacity-0</code> to <code>.opacity-100</code>
                <span class="content">- opacity helper</span>
              </p>
              <p class="content">
                <code>hover:bg-red-100</code>
                <span class="content">- hover modifier </span>
              </p>
            </div>
          </div>
          <div class="divider !my-2"></div>
          <div>
            <h5 class="content-highlight">Text utilities</h5>
            <p class="content">
              Text utility classes to control text size and more.
            </p>
            <div class="p-1 bg-gray-200 rounded-6">
              <h5 class="content-highlight !text-gray-600">Class reference</h5>
              <p class="content">
                <code>.text-gray-100</code> to <code>.text-gray-900</code>
                <span class="content">- grayscale text colours</span>
              </p>
              <p class="content">
                <code>.text-0.25</code> to <code>.text-32</code>
                <span class="content">- text sizes</span>
              </p>
              <p class="content">
                <code>.tracking-tighter</code> to <code>.tracking-widest</code>
                <span class="content">- letter spacing 0.1em to 0.5em</span>
              </p>
              <p class="content">
                <code>.z-0</code> to <code>.z-50</code>
                <span class="content">- z-index from 0 to 50</span>
              </p>
              <p class="content">
                <code>hover:text-red-100</code>
                <span class="content">- hover modifier </span>
              </p>
              <p class="content">
                <code>.overflow-visible</code> and <code>..overflow-hidden </code>
                <span class="content">- overflow control</span>
              </p>
            </div>
          </div>

        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
const avatarCode="<UserProfile\n" +
    "                  width=\"150px\"\n" +
    "                  height=\"150px\"\n" +
    "                  src=\"./assets/profile_1.svg\"\n" +
    "                  image-width=\"130\"\n" +
    "              />"
</script>
