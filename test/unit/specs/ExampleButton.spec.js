import ExampleButton from '@/components/ExampleButton';

describe('ExampleButton', () => {
  it('sets the correct default data', () => {
    expect(typeof ExampleButton.data).toBe('function');
    const defaultData = ExampleButton.data();
    expect(defaultData.message).toBe('Hi!');
  });
});
