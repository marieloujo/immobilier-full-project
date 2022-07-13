package bj.immobilier.immobilier.model;

import javax.persistence.*;
import java.io.Serializable;




@Entity
@Table(name = "AUTHORITY")
public class Authority implements Serializable {


	private static final long serialVersionUID = 3625343497817867943L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;




	@Column(name = "ROLE")
	private String role;




	public Long getId() {
		return id;
	}



	public String getRole() {
		return role;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @param role
	 *            the role to set
	 */
	public void setRole(String role) {
		this.role = role;
	}

}
