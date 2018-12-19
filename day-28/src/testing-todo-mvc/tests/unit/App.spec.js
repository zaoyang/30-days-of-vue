import App from '@/App';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('should render correct contents', () => {
    let wrapper = shallowMount(App);
    expect(wrapper.find('.title').text()).toBe('todos');
    expect(wrapper.find('.new-todo').element.placeholder).toBe(
      'What needs to be done?'
    );
  });
  
  it('should set correct default data', () => {
    expect(wrapper.vm.todos).toEqual([]);
    expect(wrapper.vm.newTodo).toEqual('');
  });
  
  describe('the user populates the text input field', () => {
    let inputField;

    beforeEach(() => {
      inputField = wrapper.find('.new-todo');
      inputField.element.value = 'New Todo';
      inputField.trigger('input');
    });

    it('should update the "newTodo" data property', () => {
      expect(wrapper.vm.newTodo).toEqual('New Todo');
    });

    describe('and presses Enter', () => {
      it('should add a new todo to the "todos" array', () => {
        inputField.trigger('keyup.enter');
        expect(wrapper.vm.todos).toEqual(['New Todo']);
      });
    });

    describe('and presses Enter and then removes the todo item', () => {
      it('should have the new todo removed from the "todos" array', () => {
        inputField.trigger("keyup.enter");
        const removeIcon = wrapper.find(".destroy");
        
        removeIcon.trigger("click");
        
        expect(wrapper.vm.todos).toEqual([]);
      });
    });
  });
});
