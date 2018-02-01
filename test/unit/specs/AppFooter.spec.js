import Vue from 'vue';
import AppFooter from '@/components/AppFooter';

describe('AppFooter', () => {
  it('expects data to not be null', () => {
    expect(typeof AppFooter.data).toBe('function');
    const defaultData = AppFooter.data();
    expect(defaultData.message).not.toBeNull();
  })
});
