import Vue from 'vue';
import App from '@/App';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    
    expect(vm.$el.querySelector('.title').textContent).toBe('todos');
    expect(vm.$el.querySelector('.new-todo').placeholder).toBe(
      'What needs to be done?'
    );
  });
  
  it('should set correct default data', () => {
    const initialData = App.data();

    expect(initialData.todos).toEqual([]);
    expect(initialData.newTodo).toEqual('');
  });
});
