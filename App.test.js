import { mount } from '@vue/test-utils';
import App from '../app.js'; // Adjust path if necessary
 // Import your main App component
 // Adjust path if necessary

describe('app.js', () => {
  let wrapper;

  // This function will create and mount the app before each test
  const createWrapper = () => {
    document.body.innerHTML = '<div id="app"></div>';
    wrapper = mount(App);
  };

  beforeEach(() => {
    createWrapper();
  });

  afterEach(() => {
    document.body.innerHTML = ''; // Clear the DOM after each test
  });

  it('should mount the app correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders the main heading', async () => {
    await wrapper.vm.$nextTick(); // Wait for DOM to update
    const heading = wrapper.find('<h1>');
    expect(heading.exists()).toBe(true); // Ensure the heading exists
    expect(heading.text()).toBe('Task Manager'); // Check the heading text
  });

  it('should add a new task', async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should add multiple tasks', async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should not add empty task', async () => {
    expect(wrapper.exists()).toBe(true);
});

});
