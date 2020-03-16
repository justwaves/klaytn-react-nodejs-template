import React from 'react';
import { Helmet } from 'react-helmet-async';
import Responsive from 'components/common/Responsive';
import WriteActionButtonContainer from 'components/write/WriteActionButtons/WriteActionButtonContainer';
import EditorContainer from 'components/write/Editor/EditorContainer';
import HeaderContainer from 'components/common/Header/HeaderContainer';
import TagBoxContainer from 'components/write/TagBox/TagBoxContainer';

const WritePage = () => (
  <>
    <HeaderContainer />
    <Responsive>
      <Helmet>
        <title>글 작성하기</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  </>
);

export default WritePage;
