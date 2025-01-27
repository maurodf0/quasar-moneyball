<template>
    <q-slide-item left-color="positive" right-color="negative" v-for="entry in storeEntries.entries" :key="entry.id"
        @left="onLeft" @right="onRight($event, entry)">
        <!-- <template v-slot:left>
          <q-icon name="done" />
        </template> -->
        <template v-slot:right>
            <q-icon name="delete" />
        </template>

        <q-item>
            <q-item-section :class="useAmountColorClass(entry.amount)" class="text-weight-bold">
                {{ entry.name }}
            </q-item-section>

            <q-item-section side class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
                {{ currencify(entry.amount) }}
            </q-item-section>
        </q-item>
    </q-slide-item>
</template>

<script setup>

const onRight = ({ reset }, entry) => {
    $q.dialog({
        title: 'Delete Entry',
        message: `Delete this entry?
        <div class="q-mt-md text-weight-bold ${useAmountColorClass(entry.amount)}">
          ${entry.name} : ${currencify(entry.amount)}
          </div>
        
        `,
        cancel: true,
        persistent: true,
        html: true,
        ok: {
            label: 'Delete',
            color: 'negative',
            noCaps: true
        },
        cancel: {
            label: 'Cancel',
            color: 'primary',
            noCaps: true
        }
    }).onOk(() => {
        storeEntries.deleteEntry(entry.id);
    }).onCancel(() => {
        reset();
    });
}

</script>
