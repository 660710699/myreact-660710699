import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/468463324_1312098816615061_1552694329553458324_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeElwfzSeLzFa4-OCINBHVBB8a1EYuqDjZXxrURi6oONlblbihS8-rdhdXXRPw3d34bl8QIYfR_BQk6uGUckB1Ux&_nc_ohc=eW9IHUUEIM0Q7kNvwHeGvWH&_nc_oc=AdnK38AKoqjM5tGL5w_QiKlnrpetpCw_S3d5lStltY4d6u7lEzIkLppL3PFkjWXeLs4&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=ZHQKU8pA4MDZpLn_1ebT2g&oh=00_AfW1zQvmoOEuRyx-Q5PR2RD-DAasIK28i5WFgnH41ZWysA&oe=68BA0A6B" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            border: '2px solid #DDA0DD'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#DDA0DD', margin: '10px 0' }}>
        ฉันทพัฒน์ มาเสม 660710699
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '20px' }}>
        นักศึกษามือใหม่ที่กำลังเรียนรู้ react go javascipt และอื่นๆอีกมากไหมไม่รู้เหมือนกันแต่จะตั้งใจเรียนครับ
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;