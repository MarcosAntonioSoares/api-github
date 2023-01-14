import { Briefcase, Link, MapPin, Users } from 'phosphor-react';
import { Avatar, Container, Data, Header, Inner, Login, Name } from './styles';

interface UserProps {
  user?: {
    login: string;
    avatar_url: string;
    name: string;
    followers: number;
    following: number;
    company: string | null;
    blog: string;
    location: string | null;
  };
}

export function Profile({ user }: UserProps) {
  return (
    <Container>
      {}
      <Header>
        <Avatar src={user?.avatar_url} />
        <Login>{user?.login}</Login>
        <Name>{user?.name}</Name>
      </Header>
      <Inner>
        <Data>
          <Users size={20} />
          {user?.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user?.following}&nbsp;<i>seguindo</i>
        </Data>
        {user?.company && (
          <Data>
            <Briefcase size={20} />
            {user?.company}
          </Data>
        )}

        {user?.location && (
          <Data>
            <MapPin size={20} />
            {user?.location}
          </Data>
        )}

        {user?.blog && (
          <Data>
            <Link size={20} />
            <a href={`\\${user?.blog}`}>{user?.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}
