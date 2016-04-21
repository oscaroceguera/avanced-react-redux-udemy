import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comments_box'

describe('Comments Box', () => {

  let component; //undefined

  beforeEach(() => {
    component = renderComponent(CommentBox)
  });

  it('Has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Has a button', () => {
    expect(component.find('button')).to.exist
  });

  describe('Entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new coment 123')
    });

    it('Shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new coment 123')
    })

    it('When submited, clears the input', () => {
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  });

});
