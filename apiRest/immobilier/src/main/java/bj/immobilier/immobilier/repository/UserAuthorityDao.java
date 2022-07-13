package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.UserAuthority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthorityDao extends JpaRepository<UserAuthority, Long> {
}
