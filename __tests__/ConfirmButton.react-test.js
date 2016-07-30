'use strict';

import React from 'react';
import ConfirmButton from '../ConfirmButton';
import renderer from 'react/lib/ReactTestRenderer';

describe('ConfirmButton', () => {
  it('should render ConfirmButton component', () => {
    const actionSpy = jasmine.createSpy();
    const tree = renderer.create(
      <ConfirmButton
        action={actionSpy}
        confirmClassNames="confirm_class"
        actionClassNames="action_class"
        label="Important action"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('changes the class when clicked', () => {
    const actionSpy = jasmine.createSpy();
    const component = renderer.create(
      <ConfirmButton
        action={actionSpy}
        confirmClassNames="confirm_class"
        actionClassNames="action_class"
        label="Important action"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    console.log(tree.props);
    tree.children[0].props.onClick({stopPropagation: jasmine.createSpy()});
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

});