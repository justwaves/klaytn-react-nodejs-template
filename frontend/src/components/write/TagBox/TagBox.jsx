import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.color.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${props => props.theme.color.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${props => props.theme.color.gray[9]};

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    font-size: 14px;
    padding: 0.5rem;
    flex: 1;
  }

  button {
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
    background: ${props => props.theme.color.gray[9]};
    color: white;
    font-weight: bold;

    &:hover {
      background: ${props => props.theme.color.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${props => props.theme.color.gray[6]};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>{`#${tag}`}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    tag => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback(e => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, insertTag],
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
