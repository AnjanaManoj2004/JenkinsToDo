// Import Vue from node_modules
import { createApp, ref, watch } from 'vue';

// Define your Vue app
const app = createApp({
    data() {
        return {
            task_data: [],  // Array to store tasks
            new_Task: "",   // Model for new task input
            customMessage: "Custom Component Message", // Custom message for the component
        };
    },
    methods: {
        // Method to add a new task
        add_Task() {
            if (this.new_Task.trim() !== "") {
                this.task_data.push({ text: this.new_Task, completed: false });
                this.new_Task = "";
            }
        },
        // Method to remove a task by index
        removetask_data(index) {
            this.task_data.splice(index, 1);
        }
    },
    computed: {
        // Computed property to count completed tasks
        completedTaskCount() {
            return this.task_data.filter(task => task.completed).length;
        }
    },
    setup() {
        const characterCount = ref(0);
        const new_Task = ref("");

        // Watch for changes in new_Task and update character count
        watch(new_Task, (newVal) => {
            characterCount.value = newVal.length;
        });

        return {
            characterCount,
            new_Task,
        };
    },
});

// Register the global custom component
app.component('custom-component', {
    props: ['message'],
    template: `
        <div>
            <h2>{{ message }}</h2>
            <slot name="customSlot"></slot>
        </div>
    `
});

// Mount the app to the DOM
app.mount("#app");
