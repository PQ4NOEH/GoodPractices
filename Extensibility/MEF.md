# MEF
Is a solutiuon for building a extensible application
There are other solutions:
+ StructureMap
+ Unity
+ MAF System.Addin (More complex but more complete)

What gives MEF is:
+ A standard for extensibility
+ A declarative way to state the compponents
+ A set of tools
+ Resolves complex problems:
  + Composition: Contracts, reflection
  + Discovery: can be configured by XML file or by fluent api in  a bootstrap
  + Components communication.

Since Framework 4.0 it is included in the Syste.ComponentModel.dll on the System.ComponentModel.Composition

## Components
+ Exporting. Defines a service provided by a part.

