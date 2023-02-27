<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Knowledge Base',link:'Pages-knowledgeBase'},{name:'Knowledge Base Topic'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Knowledge Base Topic</h1>
      </column>
    </row>
    <row>
      <column col="12"  md="8">
        <div class="card overflow-hidden">
          <div class="p-2.5">
            <p class="article">
              <span class="!text-gray-600 font-700">Pellentesque habitant morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies</em> mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <NuxtLink class="link" to="">Donec non enim</NuxtLink> in turpis pulvinar facilisis. Ut felis.
            </p>
            <p class="article">
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
            </p>
            <h2 class="text-primary-dark font-700">Header Level 2</h2>
            <ol class="!list-decimal  [&_li]:text-[0.9rem] [&_li]:text-gray-500 [&_li]:font-500 [&_li]:mb-0.25 pl-3 my-1">
              <li >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li >Aliquam tincidunt mauris eu risus.</li>
            </ol>
            <client-only>
              <CodeEditor width="0" min_width="100%" :read_only="true" :value="codeEditorValue"></CodeEditor>
            </client-only>
            <div class="my-2 bg-gray-100 p-2">
              <p class="text-1.2 leading-1.6 text-primary-dark font-500">
                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.
              </p>
            </div>
            <h3 class="text-primary-dark font-700">Header Level 3</h3>
            <p class="article mt-1">
              His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.
            </p>
            <p class="article">
              Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
            </p>
            <p class="article">
              He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
            </p>
          </div>
          <div class="card-footer">
            <p class="text-center font-800 text-primary-dark text-[0.9rem]">Was this article helpful?</p>
            <div class="text-center mt-0.5">
              <button class="btn btn-sm btn-green-full mx-0.5"><font-awesome-icon class="mr-0.25" icon="fa-solid fa-thumbs-up "></font-awesome-icon>Yes</button>
              <button class="btn btn-sm btn-red-full mx-0.5"><font-awesome-icon class="mr-0.25" icon="fa-solid fa-thumbs-down "></font-awesome-icon>No</button>
            </div>

          </div>

        </div>

      </column>
      <column col="12"  md="4">
        <row class="!pt-0 !mt-0" >
          <column class="!pt-0" col="12">
            <div class="card ">
              <div class="card-title !py-1 flex items-center justify-between">
                <div>
                  <span class="text-blue-600 uppercase tracking-widest font-500 text-[0.8rem]">Need more help?</span>
                  <h4 class="font-700 text-primary-dark mt-0.5">Similar Topics</h4>
                </div>
                <i class="bi bi-question-diamond-fill text-2.5 text-blue-600"></i>
              </div>
              <div>
                <ul class="w-full py-2 flex flex-col  [&_li]:border-b-[1px] [&_li]:border-b-gray-300 [&_li]:py-0.5 [&_li]:pl-2 [&_li]:relative">
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] hover:bg-gray-100 transition-all"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor</NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum </NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor lorem</NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consectetur adipisicing.</NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum</NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consectetur.</NuxtLink></li>
                  <li class=" flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem] transition-all hover:bg-gray-100 !border-b-[0px]"><i class="bi bi-file-text"></i><NuxtLink class="link-stretch" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consur.</NuxtLink></li>
                </ul>
              </div>
            </div>
          </column>
        </row>
        <row>
          <column col="12" v-for="(item,index) in infoData" :key="index">
            <CardInfo :icon="item.icon" :theme="item.theme" :title="item.title" :description="item.description" />
          </column>
        </row>


      </column>
    </row>


  </div>
</template>

<script setup >
import {infoData} from "~/utils/stateData";
import {codeEditorValue} from "~/utils/extraData";

</script>

