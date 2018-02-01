import Vue from 'vue';
import NoteCard from '@/components/NoteCard';

const notes = [{
  title: 'Note Title',
}]

describe('NoteCard', () => {
  it('expects valid props', () => {
    const Constructor = Vue.extend(NoteCard);
    const vm = new Constructor({ propsData: {
      notes,
    }}).$mount();

    expect(vm.$props.notes).not.toBeUndefined();
  });
});
