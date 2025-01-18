<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section :class="useAmountColorClass(entry.amount)" class="text-weight-bold">
            {{ entry.name }}
          </q-item-section>

          <q-item-section side class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
            {{ currencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-purple text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-teal text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions vertical align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-grey-8 text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <div class="q-pa-md">
      <q-btn-group rounded>
        <q-btn rounded color="primary" label="One" />

        <q-btn rounded color="primary" label="Two" />

        <q-btn-dropdown auto-close rounded color="primary" label="Three" split>
          <!-- dropdown content goes here -->
          <q-list padding style="width: 250px">
            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="folder" color="purple" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="folder" color="purple" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Videos</q-item-label>
                <q-item-label caption>London</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>

            <q-separator inset />
            <q-item-label header>Files</q-item-label>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="assignment" color="teal" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>London</q-item-label>
                <q-item-label caption>March 1st, 2018</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="assignment" color="teal" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Paris</q-item-label>
                <q-item-label caption>January 22nd, 2017</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-btn-group>
    </div>

  </q-page>
</template>

<script setup>
//
import { ref } from 'vue'
import useCurrency from '../composables/useCurrency';
import useAmountColorClass from 'src/composables/useAmountColorClass';

const { currencify } = useCurrency();


const entries = ref([
  {
    id: 'id1',
    name: 'Salary',
    amount: 4.999,
  },
  {
    id: 'id2',
    name: 'Rent',
    amount:-999,
  },
  {
    id: 'id3',
    name: 'Phone',
    amount: -19.99,
  },
  {
    id: 'id4',
    name: 'Unknown',
    amount: 0,
  },
]);
</script>
