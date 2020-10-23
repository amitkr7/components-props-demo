import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          author='Sam'
          time='Today at 6:00PM'
          content='Nice Work'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          author='Tom'
          time='Yesterday at 6:00PM'
          content='Nice Post'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          author='Ben'
          time='Today at 4:00AM'
          content='Good Work'
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
