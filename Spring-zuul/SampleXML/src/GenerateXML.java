import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

import com.ibm.iis.igc.asset_type_descriptor.Attribute;
import com.ibm.iis.igc.asset_type_descriptor.Class;
import com.ibm.iis.igc.asset_type_descriptor.DataAccessRoleEnum;
import com.ibm.iis.igc.asset_type_descriptor.DatatypeEnum;
import com.ibm.iis.igc.asset_type_descriptor.Descriptor;
import com.ibm.iis.igc.asset_type_descriptor.Family;
import com.ibm.iis.igc.asset_type_descriptor.HeaderSection;
import com.ibm.iis.igc.asset_type_descriptor.Label;
import com.ibm.iis.igc.asset_type_descriptor.ObjectFactory;
import com.ibm.iis.igc.asset_type_descriptor.Section;
import com.ibm.iis.igc.asset_type_descriptor.Tree;
import com.ibm.iis.igc.asset_type_descriptor.ValidValue;
public class GenerateXML {
	public static void main(String[] args) throws JAXBException {
	
		 ObjectFactory factory = new ObjectFactory();
		 
	      Descriptor descriptor= factory.createDescriptor();
	      descriptor.setBundleId("DataMass");
	      
	      Family family=factory.createFamily();
	      family.setClassRefs("Project, Job, Stage, DataField");
	      
	      Label label=factory.createLabel();
	      label.setKey("family1");
	      label.setInDefaultLocale("DataMass Processing");
	      family.setLabel(label);
	      family.setPosition(2f);
	      
	      Tree tree=factory.createTree();
	      tree.setPosition(3f);
	      tree.setRootClassRefs("Project");
	     
	      Label treelabel=factory.createLabel();
	      treelabel.setInDefaultLocale("DataMass Projects");
	      treelabel.setKey("tree1");
	      tree.setLabel(treelabel);
	      
	      Class clas=factory.createClass();
	      clas.setLocalId("Project");
	      //clas.setSuperClassRef("Stage");
	      //clas.setContainerClassRefs("Project,Folder");
	      //clas.setOmdClassRef("JobRun");
	      //clas.setExpandableInLineage(true);
	      
	      clas.setCanHaveImage(true);
	      clas.setDataAccessRole(DataAccessRoleEnum.NONE);
	      
	      Label claslabel=factory.createLabel();
	      claslabel.setInDefaultLocale("DataMass Project");
	      claslabel.setKey("class.Project");
	      clas.setLabel(claslabel);
	      
	      //factory.create
	      Label plulabel=factory.createLabel();
	      plulabel.setInDefaultLocale("DataMass Projects");
	      plulabel.setKey("class-plural.Project");
	      clas.setPluralLabel(plulabel);
	      
	      HeaderSection hs=factory.createHeaderSection();
	      Attribute att=factory.createAttribute();
	      att.setLocalId("phase");
	      att.setType(DatatypeEnum.STRING);
	      // att.setMultiValued(true);
	      att.setEditable(true);
	      
	      Label attrlabel=factory.createLabel();
	      attrlabel.setInDefaultLocale("Phase");
	      attrlabel.setKey("attr.Project.phase");
	      att.setLabel(attrlabel);
	      
	      ValidValue vv=factory.createValidValue();
	      vv.setLocalId("DEV");
	      
	      Label vvlabel=factory.createLabel();
	      vvlabel.setInDefaultLocale("In Development");
	      vvlabel.setKey("enum.Phase.DEV");
	      vv.setLabel(vvlabel);
	      att.getValidValue().add(vv);
	      
	      ValidValue vv1=factory.createValidValue();
	      vv1.setLocalId("TEST");
	      
	      Label vvlabel1=factory.createLabel();
	      vvlabel1.setInDefaultLocale(" Undergoes Testing");
	      vvlabel1.setKey("enum.Phase.TEST");
	      vv1.setLabel(vvlabel1);
	      att.getValidValue().add(vv1);
	      
	      ValidValue vv2=factory.createValidValue();
	      vv2.setLocalId("PROD");
	      
	      Label vvlabel2=factory.createLabel();
	      vvlabel2.setInDefaultLocale(" Undergoes Testing");
	      vvlabel2.setKey("enum.Phase.PROD");
	      vv1.setLabel(vvlabel2);
	      att.getValidValue().add(vv2);
	     
	      
	      hs.getAttribute().add(att);
	      clas.setHeaderSection(hs);
	      
	     /** Section sec=factory.createSection();
	      Label secLabel=factory.createLabel();
	      secLabel.setInDefaultLocale("Job Details");
	      secLabel.setKey("section.Job.Details");
	      sec.setLabel(secLabel);
	      clas.getSection().add(sec);**/
	      
	      
	      Class clas2=factory.createClass();
	      clas2.setLocalId("Job");
	     // clas.setSuperClassRef("Stage");
	      clas2.setContainerClassRefs("Project");
	      //clas.setOmdClassRef("JobRun");
	      clas2.setExpandableInLineage(true);
	      
	      clas2.setCanHaveImage(true);
	     // clas2.setDataAccessRole(DataAccessRoleEnum.NONE);
	      
	      Label claslabel2=factory.createLabel();
	      claslabel2.setInDefaultLocale("DataMass Job");
	      claslabel2.setKey("class.Job");
	      clas2.setLabel(claslabel2);
	      
	      //factory.create
	      Label plulabel2=factory.createLabel();
	      plulabel2.setInDefaultLocale("DataMass Jobs");
	      plulabel2.setKey("class-plural.Job");
	      clas2.setPluralLabel(plulabel2);
	      
	      HeaderSection hs2=factory.createHeaderSection();
	      Attribute att2=factory.createAttribute();
	      att2.setLocalId("Version");
	      att2.setType(DatatypeEnum.STRING);
	     // att.setMultiValued(true);
	   //   att2.setEditable(true);
	      
	      Label attrlabel2=factory.createLabel();
	      attrlabel2.setInDefaultLocale("Version");
	      attrlabel2.setKey("attr.Job.version");
	      att2.setLabel(attrlabel2);
	      
	      hs2.getAttribute().add(att2);
	      clas2.setHeaderSection(hs2);
	      
	      
	     Section sec2 =factory.createSection();
	      Label secLabel2=factory.createLabel();
	      secLabel2.setInDefaultLocale("Job Details");
	      secLabel2.setKey("section.Job.Details");
	      sec2.setLabel(secLabel2);
	      
	      Attribute secatt2=factory.createAttribute();
	      secatt2.setLocalId("author");
	      secatt2.setType(DatatypeEnum.STRING);
	     // att.setMultiValued(true);
	   //   att2.setEditable(true);
	      
	      Label secattrlabel2=factory.createLabel();
	      secattrlabel2.setInDefaultLocale("Author");
	      secattrlabel2.setKey("attr.Job.author");
	      secatt2.setLabel(secattrlabel2);
	      
	      sec2.getAttribute().add(secatt2);  
	     // hs2.getAttribute().add(att2);
	      clas2.getSection().add(sec2);
	      
	      
	      
	      
	      Class clas3=factory.createClass();
	      clas3.setLocalId("Stage");
	     // clas.setSuperClassRef("Stage");
	      clas3.setContainerClassRefs("Job");
	      //clas.setOmdClassRef("JobRun");
	      clas3.setExpandableInLineage(true);
	      
	      clas3.setCanHaveImage(false);
	     // clas2.setDataAccessRole(DataAccessRoleEnum.NONE);
	      
	      Label claslabel3=factory.createLabel();
	      claslabel3.setInDefaultLocale("DataMass Stage");
	      claslabel3.setKey("class.Stage");
	      clas3.setLabel(claslabel3);
	      
	      //factory.create
	      Label plulabel3=factory.createLabel();
	      plulabel3.setInDefaultLocale("DataMass Stages");
	      plulabel3.setKey("class-plural.Stage");
	      clas3.setPluralLabel(plulabel3);
	      
	      HeaderSection hs3=factory.createHeaderSection();
	      Attribute att3=factory.createAttribute();
	      att3.setLocalId("StageType");
	      att3.setType(DatatypeEnum.STRING);
	     // att.setMultiValued(true);
         //att2.setEditable(true);
	      
	      Label attrlabel3=factory.createLabel();
	      attrlabel3.setInDefaultLocale("Stage Type");
	      attrlabel3.setKey("attr.Stage.StageType");
	      att3.setLabel(attrlabel3);
	      
	      hs3.getAttribute().add(att3);
	      clas3.setHeaderSection(hs3);
	      
	      
	      
	      Class clas4=factory.createClass();
	      clas4.setLocalId("Stage_Transformer");
	      clas4.setSuperClassRef("Stage");
	     //   clas4.setContainerClassRefs("Job");
	      //clas.setOmdClassRef("JobRun");
	    //  clas4.setExpandableInLineage(true);
	      
	      clas4.setCanHaveImage(false);
	     // clas2.setDataAccessRole(DataAccessRoleEnum.NONE);
	      
	      Label claslabel4=factory.createLabel();
	      claslabel4.setInDefaultLocale("DataMass Transformer Stage");
	      claslabel4.setKey("class.Stage_Transformer");
	      clas4.setLabel(claslabel4);
	      
	      //factory.create
	      Label plulabel4=factory.createLabel();
	      plulabel4.setInDefaultLocale("DataMass Transformer Stages");
	      plulabel4.setKey("class-plural.Stage_Transformer");
	      clas4.setPluralLabel(plulabel4);
	      
	      
	      
	      Class clas5=factory.createClass();
	      clas5.setLocalId("Stage_File");
	      clas5.setSuperClassRef("Stage");
	     //   clas4.setContainerClassRefs("Job");
	      //clas.setOmdClassRef("JobRun");
	    //  clas4.setExpandableInLineage(true);
	      
	      clas5.setCanHaveImage(false);
	     // clas2.setDataAccessRole(DataAccessRoleEnum.NONE);
	      
	      Label claslabel5=factory.createLabel();
	      claslabel5.setInDefaultLocale("DataMass File Stage");
	      claslabel5.setKey("class.File");
	      clas5.setLabel(claslabel5);
	      
	      //factory.create
	      Label plulabel5=factory.createLabel();
	      plulabel5.setInDefaultLocale("DataMass File Stages");
	      plulabel5.setKey("class-plural.Stage_File");
	      clas5.setPluralLabel(plulabel5);
	      
	      
	      
	      Class clas6=factory.createClass();
	      clas6.setLocalId("DataField");
	     // clas6.setSuperClassRef("Stage");
	      clas6.setContainerClassRefs("Stage");
	      //clas.setOmdClassRef("JobRun");
	    //  clas4.setExpandableInLineage(true);
	      
	      clas6.setCanHaveImage(false);
	     // clas2.setDataAccessRole(DataAccessRoleEnum.NONE);
	      
	      Label claslabel6=factory.createLabel();
	      claslabel6.setInDefaultLocale("DataMass Job Field");
	      claslabel6.setKey("class.DataField");
	      clas6.setLabel(claslabel6);
	      
	      //factory.create
	      Label plulabel6=factory.createLabel();
	      plulabel6.setInDefaultLocale("DataMass Job Fields");
	      plulabel6.setKey("class-plural.DataField");
	      clas6.setPluralLabel(plulabel6);
	      
	      HeaderSection hs6=factory.createHeaderSection();
	      Attribute att6=factory.createAttribute();
	      att6.setLocalId("dataType");
	      att6.setType(DatatypeEnum.STRING);
	     // att.setMultiValued(true);
	   //   att2.setEditable(true);
	      
	      Label attrlabel6=factory.createLabel();
	      attrlabel6.setInDefaultLocale("Data Type");
	      attrlabel6.setKey("attr.DataField.dataType");
	      att6.setLabel(attrlabel6);
	      
	      hs6.getAttribute().add(att6);
	      clas6.setHeaderSection(hs6);
	      

	      Section sec61 =factory.createSection();
	      Label secLabel61=factory.createLabel();
	      secLabel61.setInDefaultLocale("Rules");
	      secLabel61.setKey("section.DataFiels.Rules");
	      sec61.setLabel(secLabel61);
	      
	      Attribute secatt61=factory.createAttribute();
	      secatt61.setLocalId("derivationExpression");
	      secatt61.setType(DatatypeEnum.LONG_TEXT);
	     // att.setMultiValued(true);
	   //   att2.setEditable(true);
	      
	      Label secattrlabel61=factory.createLabel();
	      secattrlabel61.setInDefaultLocale("Expression");
	      secattrlabel61.setKey("attr.DataField.derivationExpression");
	      secatt61.setLabel(secattrlabel61);
	      
	      sec61.getAttribute().add(secatt61);  
	     // hs2.getAttribute().add(att2);
	      clas6.getSection().add(sec61);
	      
	      
	      Section sec62 =factory.createSection();
	      Label secLabel62=factory.createLabel();
	      secLabel62.setInDefaultLocale("Analytics");
	      secLabel62.setKey("section.DataFiels.Analytics");
	      sec62.setLabel(secLabel62);
	      
	      Attribute secatt62=factory.createAttribute();
	      secatt62.setLocalId("usageDensity");
	      secatt62.setType(DatatypeEnum.DOUBLE);
	     // att.setMultiValued(true);
	   //   att2.setEditable(true);
	      
	      Label secattrlabel62=factory.createLabel();
	      secattrlabel62.setInDefaultLocale("Analytics");
	      secattrlabel62.setKey("attr.DataField.analytics");
	      secatt62.setLabel(secattrlabel62);
	      
	      sec62.getAttribute().add(secatt62);  
	     // hs2.getAttribute().add(att2);
	      clas6.getSection().add(sec62);
	      
	      
	      descriptor.getClazz().add(clas);descriptor.getClazz().add(clas2);;descriptor.getClazz().add(clas3);
	      descriptor.getClazz().add(clas4);descriptor.getClazz().add(clas5);descriptor.getClazz().add(clas6);
	      descriptor.getFamily().add(family);
	      descriptor.getTree().add(tree);
	      
	      JAXBContext context = JAXBContext.newInstance("com.ibm.iis.igc.asset_type_descriptor");
	      JAXBElement<Descriptor> element = factory.createDescriptor(descriptor);
	      Marshaller marshaller = context.createMarshaller();
	      marshaller.setProperty("jaxb.formatted.output",Boolean.TRUE);
	      marshaller.marshal(element,System.out);
	}

}
