import { createApp, ref, watch } from 'vue';

// Define your Vue app
const app = createApp({
    data() {
        return {
            task_data: [], // Array to store tasks
            new_Task: "", // Model for new task input
        };
    },
    methods: {
        // Method to add a new task
        add_Task() {
            if (this.new_Task.trim() !== "") {
                this.task_data.push({ text: this.new_Task, completed: false });
                this.new_Task = ""; // Clear the input field
            }
        },
        // Method to remove a task by index
        removetask_data(index) {
            this.task_data.splice(index, 1);
        },
    },
    computed: {
        // Computed property to count completed tasks
        completedTaskCount() {
            return this.task_data.filter(task => task.completed).length;
        },
    },
    components: {
        'custom-component': {
            props: ['message'],
            template: `
                <div>
                    <h2>{{ message }}</h2>
                    <p>Hello and Welcome</p>
                    <slot name="customSlot"></slot>
                </div>
            `,
        },
    },
    setup() {
        const task_data = ref([]); // Reactive task data array
        const new_Task = ref(""); // Use ref for reactivity
        const characterCount = ref(0);

        // Watch for changes in new_Task and update character count
        watch(new_Task, (newVal) => {
            characterCount.value = newVal.length;
        });

        // Method to add a new task
        const add_Task = () => {
            if (new_Task.value.trim() !== "") {
                task_data.value.push({ text: new_Task.value, completed: false });
                new_Task.value = ""; // Clear the input field
            }
        };

        // Method to remove a task by index
        const removetask_data = (index) => {
            task_data.value.splice(index, 1);
        };

        return {
            task_data,
            new_Task,
            characterCount,
            add_Task,
            removetask_data,
        };
    },
});

// Mount the app to the DOM
app.mount("#app");
export default app
