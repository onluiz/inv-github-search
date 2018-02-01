import Vue from 'vue';
import ExampleButton from '@/components/ExampleButton';

describe('ExampleButton', () => {

  it('sets the correct default data', () => {
    expect(typeof ExampleButton.data).toBe('function')
    const defaultData = ExampleButton.data()
    expect(defaultData.message).toBe('Hi!')
  })

  it('should render correct contents', () => {
    // const Constructor = Vue.extend(ExampleButton);
    // const vm = new Constructor().$mount();
    // expect(vm.$el.querySelector('.hello h1').textContent)
    // .toEqual('Welcome to Your Vue.js App');
  });
});
