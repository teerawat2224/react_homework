const ProfileImage = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{width: '200px',height: '200px',borderRadius: '100%',marginBottom: '15px',}}
    />
  );
  
  const ProfileCard = ({ src, alt, name, email, stats }) => (
    <div
      style={{ width: '800px',backgroundColor: 'white',borderRadius: '10px',padding: '20px',textAlign: 'center', margin: '0 auto',}}>
      <ProfileImage src={src} alt={alt} />
      <h3 style={{ fontSize: '18px', margin: '5px 0' }}>{name}</h3>
      <p style={{ color: '#777', fontSize: '14px', marginBottom: '20px' }}>{email}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {stats.map(({ label, value }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <strong style={{ fontSize: '16px', display: 'block' }}>{value}</strong>
            <p style={{ margin: 0, color: '#777', fontSize: '12px' }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  const App = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
      }}
    >
      <ProfileCard
        src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
        alt="User Profile Image"
        name="Julienne Moore"
        email="julienne.moore@company.com"
        stats={[
          { label: 'Posts', value: 25 },
          { label: 'Following', value: 350 },
          { label: 'Followers', value: '1.5K' },
        ]}
      />
    </div>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));
  